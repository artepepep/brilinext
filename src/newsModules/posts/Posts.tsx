"use client"

import {Container, Pagination, Section, TransparentButton} from "@/shared/components";
import {Post} from "@/shared/components";
import {useState} from "react";

export default function Posts () {
  const [currentPage, setCurrentPage] = useState(0);

  const posts = [
    {
      href: "/news",
      category: "AI",
      date: "20.08.2024",
      heading: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      href: "/news",
      category: "AI",
      date: "20.08.2024",
      heading: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      href: "/news",
      category: "AI",
      date: "20.08.2024",
      heading: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      href: "/news",
      category: "AI",
      date: "20.08.2024",
      heading: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      href: "/news",
      category: "AI",
      date: "20.08.2024",
      heading: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      href: "/news",
      category: "AI",
      date: "20.08.2024",
      heading: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      href: "/news",
      category: "AI",
      date: "20.08.2024",
      heading: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      href: "/news",
      category: "AI",
      date: "20.08.2024",
      heading: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      href: "/news",
      category: "AI",
      date: "20.08.2024",
      heading: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      href: "/news",
      category: "AI",
      date: "20.08.2024",
      heading: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      href: "/news",
      category: "AI",
      date: "20.08.2024",
      heading: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      href: "/news",
      category: "AI",
      date: "20.08.2024",
      heading: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      href: "/news",
      category: "AI",
      date: "20.08.2024",
      heading: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      href: "/news",
      category: "AI",
      date: "20.08.2024",
      heading: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      href: "/news",
      category: "AI",
      date: "20.08.2024",
      heading: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      href: "/news",
      category: "AI",
      date: "20.08.2024",
      heading: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      href: "/news",
      category: "AI",
      date: "20.08.2024",
      heading: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      href: "/news",
      category: "AI",
      date: "20.08.2024",
      heading: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      href: "/news",
      category: "AI",
      date: "20.08.2024",
      heading: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      href: "/news",
      category: "AI",
      date: "20.08.2024",
      heading: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      href: "/news",
      category: "AI",
      date: "20.08.2024",
      heading: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      href: "/news",
      category: "AI",
      date: "20.08.2024",
      heading: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      href: "/news",
      category: "AI",
      date: "20.08.2024",
      heading: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      href: "/news",
      category: "AI",
      date: "20.08.2024",
      heading: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      href: "/news",
      category: "AI",
      date: "20.08.2024",
      heading: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      href: "/news",
      category: "AI",
      date: "20.08.2024",
      heading: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      href: "/news",
      category: "AI",
      date: "20.08.2024",
      heading: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      href: "/news",
      category: "AI",
      date: "20.08.2024",
      heading: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      href: "/news",
      category: "AI",
      date: "20.08.2024",
      heading: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      href: "/news",
      category: "AI",
      date: "20.08.2024",
      heading: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      href: "/news",
      category: "AI",
      date: "20.08.2024",
      heading: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      href: "/news",
      category: "AI",
      date: "20.08.2024",
      heading: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      href: "/news",
      category: "AI",
      date: "20.08.2024",
      heading: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      href: "/news",
      category: "AI",
      date: "20.08.2024",
      heading: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      href: "/news",
      category: "AI",
      date: "20.08.2024",
      heading: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      href: "/news",
      category: "AI",
      date: "20.08.2024",
      heading: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      href: "/news",
      category: "AI",
      date: "20.08.2024",
      heading: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      href: "/news",
      category: "AI",
      date: "20.08.2024",
      heading: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      href: "/news",
      category: "AI",
      date: "20.08.2024",
      heading: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      href: "/news",
      category: "AI",
      date: "20.08.2024",
      heading: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      href: "/news",
      category: "AI",
      date: "20.08.2024",
      heading: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      href: "/news",
      category: "AI",
      date: "20.08.2024",
      heading: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      href: "/news",
      category: "AI",
      date: "20.08.2024",
      heading: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      href: "/news",
      category: "AI",
      date: "20.08.2024",
      heading: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      href: "/news",
      category: "AI",
      date: "20.08.2024",
      heading: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      href: "/news",
      category: "AI",
      date: "20.08.2024",
      heading: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      href: "/news",
      category: "AI",
      date: "20.08.2024",
      heading: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      href: "/news",
      category: "AI",
      date: "20.08.2024",
      heading: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      href: "/news",
      category: "AI",
      date: "20.08.2024",
      heading: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      href: "/news",
      category: "AI",
      date: "20.08.2024",
      heading: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      href: "/news",
      category: "AI",
      date: "20.08.2024",
      heading: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      href: "/news",
      category: "AI",
      date: "20.08.2024",
      heading: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      href: "/news",
      category: "AI",
      date: "20.08.2024",
      heading: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      href: "/news",
      category: "AI",
      date: "20.08.2024",
      heading: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      href: "/news",
      category: "AI",
      date: "20.08.2024",
      heading: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      href: "/news",
      category: "AI",
      date: "20.08.2024",
      heading: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      href: "/news",
      category: "AI",
      date: "20.08.2024",
      heading: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      href: "/news",
      category: "AI",
      date: "20.08.2024",
      heading: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      href: "/news",
      category: "AI",
      date: "20.08.2024",
      heading: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      href: "/news",
      category: "AI",
      date: "20.08.2024",
      heading: "Lorem ipsum dolor sit amet consectetur.",
    },
  ];

  const [currentPosts, setCurrentPosts] = useState<Array<any>>([...posts.slice(0, 9)]);

  const pageChangeHandler = (event: { selected: number }) => {
    setCurrentPage(event.selected);
    setCurrentPosts([...posts.slice(event.selected * 9, event.selected * 9 + 9)]);
  };

  const viewMoreHandler = () => {
    if (currentPage !== (Math.ceil(posts.length / 9) - 1)) {
      setCurrentPage(prevState => prevState + 1);
      setCurrentPosts(prevState => prevState.concat([...posts.slice(currentPage * 9, currentPage * 9 + 9)]));
      console.log(currentPosts.length, currentPage);
    }
  };
  const prevSkipPageButtonHandler = () => {
    setCurrentPage(prevState => {
      let newPage = 0;

      if ((prevState - 3) >= 0) {
        newPage = prevState - 3;
      } else {
        newPage = 0
      }
      setCurrentPosts([...posts.slice(newPage * 9, newPage * 9 + 9)]);
      return newPage;
    });
  }

  const nextSkipPageButtonHandler = () => {
    setCurrentPage(prevState => {
      let newPage = 0;

      if ((prevState + 3) <= Math.ceil(posts.length / 9) - 1) {
        newPage = prevState + 3;
      } else {
        newPage = Math.ceil(posts.length / 9) - 1;
      }
      setCurrentPosts([...posts.slice(newPage * 9, newPage * 9 + 9)]);
      return newPage;
    });
  }

  return (
    <Section>
      <Container>
        <div className={"grid grid-cols-1 place-items-center gap-10 md:grid-cols-2 xl:grid-cols-3"}>
          {currentPosts.map((post, counter) => (
            <Post key={counter}
              href={`/news/${counter}`}
              category={post.category}
              date={post.date}
              heading={post.heading}
            />
          ))}
        </div>
        <div className={"flex flex-col items-center mt-10"}>
          <TransparentButton onClick={() => viewMoreHandler()} type={"button"} text={"View more"} uppercase={false} />
        </div>
        <div className={"pb-[120px]"}>
          <Pagination
            forcePage={currentPage}
            onPageChange={(event) => pageChangeHandler(event)}
            pageCount={Math.ceil(posts.length / 9)}
            prevSkipPageButtonClick={() => prevSkipPageButtonHandler()}
            nextSkipPageButtonClick={() => nextSkipPageButtonHandler()}
          />
        </div>
      </Container>
    </Section>
  )
}