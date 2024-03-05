'use client';
import React, { createContext, useState, ReactNode, FC, useMemo } from 'react';

export interface Post {
  id: number;
  title: string;
  author: string;
  publicationDate: string;
  excerpt: string;
  body: string;
  comments?: { text: string; name?: string; date: Date }[];
}

interface BlogContextType {
  allPosts?: Post[];
  currentPage: number;
  totalPages: number;
  updateCurrentPage: (page: number) => void;
  getCurrentPagePosts: () => Post[];
  addCommentToPost: (
    postId: number,
    comment: { text: string; name?: string }
  ) => void;
}

const BlogContext = createContext<BlogContextType | null>(null);

export const useBlogContext = () => {
  const blogContext = React.useContext(BlogContext);
  if (!blogContext) {
    throw Error('Component has to be descendant of  BlogContext');
  }
  return blogContext;
};

export const BlogProvider: FC<{ children: ReactNode; posts: Post[] }> = ({
  children,
  posts,
}) => {
  const postsPerPage: number = 12;
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [allPosts, setAllPosts] = useState<Post[]>(posts);

  const addCommentToPost = (
    postId: number,
    comment: { text: string; name?: string }
  ) => {
    setAllPosts((prevPosts) => {
      const updatedPosts = prevPosts?.map((post) =>
        post.id === postId
          ? {
              ...post,
              comments: [
                { ...comment, date: new Date() },
                ...(post.comments || []),
              ],
            }
          : post
      );

      return updatedPosts;
    });
  };
  const getCurrentPagePosts = () => {
    const indexOfLastPost: number = currentPage * postsPerPage;
    const indexOfFirstPost: number = indexOfLastPost - postsPerPage;
    return allPosts?.slice(indexOfFirstPost, indexOfLastPost);
  };

  const totalPages: number = Math.ceil(allPosts?.length / postsPerPage);

  const updateCurrentPage = (page: number) => setCurrentPage(page);

  const contextValue = useMemo<BlogContextType>(
    () => ({
      allPosts,
      currentPage,
      getCurrentPagePosts,
      addCommentToPost,
      totalPages,
      updateCurrentPage,
    }),
    [allPosts, currentPage]
  );

  return (
    <BlogContext.Provider value={contextValue}>{children}</BlogContext.Provider>
  );
};
