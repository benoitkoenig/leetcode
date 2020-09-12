module Gray(main) where

import System.Environment

grayUnmemoized :: Int -> [String]
grayUnmemoized 1 = ["0", "1"]
grayUnmemoized x = (map (\a -> "0" ++ a) $ gray (x - 1)) ++ reverse (map (\a -> "1" ++ a) $ gray (x - 1))

gray = (map grayUnmemoized [0 ..] !!)

main :: IO ()
main = do
  x <- getArgs
  let y = read $ head x

  print $ gray y
