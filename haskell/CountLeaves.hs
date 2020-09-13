module CountLeaves(main) where

data Tree a = Empty | Branch a (Tree a) (Tree a)
  deriving (Show, Eq)

countLeaves :: Eq a => Tree a -> Int
countLeaves Empty = 1
countLeaves (Branch _ a b) = countLeaves a + countLeaves b

main :: IO ()
main = do
  print $ countLeaves (Branch 'x' (Branch 'x' Empty Empty) (Branch 'x' Empty Empty))
