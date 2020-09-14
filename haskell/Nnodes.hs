module Nnodes(main) where

data Tree a = Node a [Tree a]
  deriving (Eq, Show)

tree1 = Node 'a' []

tree2 = Node 'a' [Node 'b' []]

tree3 = Node 'a' [Node 'b' [Node 'c' []]]

tree4 = Node 'b' [Node 'd' [], Node 'e' []]

tree5 = Node 'a' [
  Node 'f' [Node 'g' []],
  Node 'c' [],
  Node 'b' [Node 'd' [], Node 'e' []]
  ]

nnodes :: Eq a => Tree a -> Int
nnodes (Node _ branches) = 1 + sum (map nnodes branches)

main :: IO ()
main = do
  print $ nnodes tree5
