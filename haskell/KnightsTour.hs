module KnightsTour(main) where

import Control.Applicative
import Data.List
import Data.Maybe

canJumpThat :: (Int, Int) -> (Int, Int) -> Bool
canJumpThat (x, y) (x', y') = abs ((x - x') * (y - y')) == 2

getPathFromThere :: (Int, Int) -> [(Int, Int)] -> (Int, Int) -> Maybe [(Int, Int)]
getPathFromThere finalPosition [] currentPosition | (canJumpThat finalPosition currentPosition) = Just [currentPosition, finalPosition]
getPathFromThere finalPosition squaresLeft currentPosition = pathFromThere
  where squaresAvailable = filter (canJumpThat currentPosition) squaresLeft
        pathsAvailable = map (\x -> getPathFromThere finalPosition (squaresLeft \\ [x]) x) squaresAvailable
        pathLeft = do { x <- find (Nothing/=) pathsAvailable ; x }
        pathFromThere = liftA2 (:) (Just currentPosition) pathLeft

knightsTour :: Int -> (Int, Int) -> (Int, Int) -> Maybe [(Int, Int)]
knightsTour n initPosition finalPosition = getPathFromThere finalPosition [ (x, y) | x <- [1..n], y <- [1..n], (x, y) /= finalPosition, (x, y) /= initPosition ] initPosition

main :: IO ()
main = do
  print $ knightsTour 8 (1, 1) (1, 1)
