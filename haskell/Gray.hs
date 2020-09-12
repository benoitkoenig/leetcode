module Gray(main) where

import System.Environment

grayUnmemoized :: Int -> [String]
grayUnmemoized 0 = [""]
grayUnmemoized x = (map ('0':) prev) ++ reverse (map ('1':) prev)
  where prev = gray $ x - 1

gray = (map grayUnmemoized [0 ..] !!)

main :: IO ()
main = do
  x <- getArgs
  let y = read $ head x

  print $ gray y
