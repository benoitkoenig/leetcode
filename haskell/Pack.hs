module Pack(main) where

import System.Environment
import Data.List

pack :: Eq a => [a] -> [[a]]
pack = groupBy (==)

main :: IO ()
main = do
  x <- getArgs
  print $ pack x
