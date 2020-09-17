module Queens(main) where

import Data.List (permutations)
import Data.Set (fromList)

areDiagonalsValid :: [Int] -> Bool
areDiagonalsValid x = areFirstDiagonalsValid && areOtherDiagonalsValid
  where positions = zip [1..] x
        isDuplicateFree x = length x == length (fromList x)
        areFirstDiagonalsValid = isDuplicateFree $ map (\(h, v) -> h - v) positions
        areOtherDiagonalsValid = isDuplicateFree $ map (\(h, v) -> h + v) positions

queens :: Int -> [[Int]]
queens n = filter areDiagonalsValid $ permutations [1..n] -- no two queens share a row or column by construction

main :: IO ()
main = do
  let result = queens 8
  print $ length $ result
  print $ result
