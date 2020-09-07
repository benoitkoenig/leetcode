ghc -main-is $1 $1.hs -o $1 && ./$1 "${@:2}"
