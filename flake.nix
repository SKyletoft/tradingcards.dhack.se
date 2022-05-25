{
	description = "The most brilliant webservice of all time";

	inputs = {
		nixpkgs.url     = "github:nixos/nixpkgs/nixpkgs-unstable";
		flake-utils.url = "github:numtide/flake-utils";
	};

	outputs = { self, nixpkgs, flake-utils }:
		flake-utils.lib.eachDefaultSystem(system:
			let
				pkgs = nixpkgs.legacyPackages.${system};
			in rec {
				tradingcards = pkgs.rustPlatform.buildRustPackage {
					pname              = "tradingcards";
					version            = "0.0.1";
					src                = self;
					cargoSha256        = "sha256-ah8IjShmivS6IWL3ku/4/j+WNr/LdUnh1YJnPdaFdcM=";
					cargoLock.lockFile = "${self}/Cargo.lock";
					buildInputs        = with pkgs; [ ];
					nativeBuildInputs  = with pkgs; [ ];
				};
				defaultPackage = tradingcards;
				devShell = pkgs.mkShell {
					shellHook = ''
						PS1="\e[32;1mnix-flake: \e[34m\w \[\033[00m\]\n↳ "
					'';
					buildInputs       = tradingcards.buildInputs;
					nativeBuildInputs = with pkgs; [
						rustup
						valgrind
						rr
					] ++ tradingcards.nativeBuildInputs;
				};
			}
		);
}

