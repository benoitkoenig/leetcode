module Ipl(main) where

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

iplRaw :: Eq a => Int -> Tree a -> Int
iplRaw path (Node _ branches) = path + sum (map (iplRaw (path + 1)) branches)

ipl :: Eq a => Tree a -> Int
ipl = iplRaw 0

main :: IO ()
main = do
  print $ ipl tree5
