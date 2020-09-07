module Encode(main) where

import System.Environment
import Pack (pack)

encode :: Eq a => [a] -> [(Int, a)]
encode = map (\y -> (length y, head y)) . pack

main :: IO ()
main = do
  x <- getArgs
  print $ encode x
