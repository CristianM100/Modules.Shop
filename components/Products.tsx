import { formatCurrency } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { ProductsProps } from '@/lib/types/props'
import { products as defaultProducts } from '@/lib/data/products'

/*
export const products: ProductType[] = [
  {
    id: 'html-course-for-beginners',
    name: 'HTML - Course for Beginners',
    description: `In this guide to HTML for beginners, we’ll learn what HTML is and what it’s used for. 
    Then, we’ll walk through how to write some basic HTML and review some of its most important elements and attributes. 
    We’ll end with a brief look at some resources you can use to continue learning and using HTML. HTML is the foundation of basically every web page. 
    It’s how we tell browsers to structure content into paragraphs, headings, images, links, lists, forms, tables, buttons, and more. If you’re interested in building a website, web development, or just coding in general, learning HTML is a great place to start. 
    Let’s get started!`,
    price: 4.99, // price as number
    rating: 4.5, // added default rating
    slug: 'html-course-for-beginners',
    images: [
      {
        id: 'html-image',
        file: {
          url: '/images/products/html.png',
          metadata: 'HTML course cover image'
        }
      }
    ]
  },
  {
    id: 'learn-css-introduction',
    name: 'Learn CSS: Introduction',
    description: `Ready to start your journey into Cascading Style Sheets (CSS)? 
    Take Learn CSS: Introduction - with CSS, you can add color, background images and change around layouts to make your web pages feel like works of art!
    You'll find learning CSS essential in styling websites. Web developers use it to build on basic HTML and add personality to plain text pages. 
    This course helps you expand your coding foundation and gives you CSS interactive practice to start adding colors and background images or editing layouts so you can create your very own, unique stylized web pages.`,
    price: 5.99,
    rating: 4.7,
    slug: 'learn-css-introduction',
    images: [
      {
        id: 'css-image',
        file: {
          url: '/images/products/css.png',
          metadata: 'CSS course cover image'
        }
      }
    ]
  },
  {
    id: 'complete-javascript-course',
    name: 'The Complete JavaScript Course',
    description: `Learn how to use JavaScript - a powerful and flexible programming language for adding website interactivity.
    You interact with JavaScript code all the time — you just might not realize it.
    It powers dynamic behavior on websites (like this one) and plays an important role in many fields, like front- and back-end engineering, game and mobile development, virtual reality, and more. In this course, you’ll learn JavaScript fundamentals that will be helpful as you dive deeper into more advanced topics.`,
    price: 6.99,
    rating: 4.8,
    slug: 'complete-javascript-course',
    images: [
      {
        id: 'javascript-image',
        file: {
          url: '/images/products/javascript.png',
          metadata: 'JavaScript course cover image'
        }
      }
    ]
  },
  {
    id: 'typescript-complete-guide',
    name: `Typescript: The Complete Developer's Guide`,
    description: `This course is about mastering Typescript, so learning popular design patterns and building complex projects is important. 
    TypeScript is typed JavaScript. TypeScript adds types to JavaScript to help you speed up the development by catching errors before you even run the JavaScript code. Composition vs Inheritance? You'll understand it. You'll build your own web framework? You'll do it. Typescript with React/Redux? It's here!
    The goal of this course is to help you understand why each feature of Typescript exists, and exactly where to use them.`,
    price: 5.89,
    rating: 4.6,
    slug: 'typescript-complete-guide',
    images: [
      {
        id: 'typescript-image',
        file: {
          url: '/images/products/typescript.png',
          metadata: 'TypeScript course cover image'
        }
      }
    ]
  },
  {
    id: 'react-course-learn-react-js',
    name: 'React Course: Learn React JS',
    description: `ReactJS is a widely used popular and powerful JavaScript library for building user interfaces. 
    It is developed and maintained by Facebook.
    React is a framework that employs Webpack to automatically compile React, JSX, and ES6 code while handling CSS file prefixes. 
    React is a JavaScript-based UI development library. Although React is a library rather than a language, it is widely used in web development. 
    The library first appeared in May 2013 and is now one of the most commonly used frontend libraries for web development.
    It's offers various extensions for entire application architectural support, such as Flux and React Native, beyond mere UI.`,
    price: 5.49,
    rating: 4.9,
    slug: 'react-course-learn-react-js',
    images: [
      {
        id: 'react-image',
        file: {
          url: '/images/products/react.png',
          metadata: 'ReactJS course cover image'
        }
      }
    ]
  },
  {
    id: 'learning-angular',
    name: 'Learning Angular',
    description: `As a web developer, you’ll need to learn how to use new frameworks on a regular basis. 
    AngularJS is a full-featured framework that is incredibly popular among developers. 
    For single-page applications, the AngularJS framework creates rich interactive features for a real-time experience. 
    It’s friendly to developers and has a supportive and active community. 
    Products built with AngularJS include YouTube Video Manager, The Weather Channel site, several Google products, and Tinder.`,
    price: 6.99,
    rating: 4.3,
    slug: 'learning-angular',
    images: [
      {
        id: 'angular-image',
        file: {
          url: '/images/products/angular.png',
          metadata: 'Angular course cover image'
        }
      }
    ]
  },
  {
    id: 'learn-php',
    name: 'Learn PHP',
    description: `Learn the fundamentals of PHP, one of the most popular languages of modern web development.
    PHP is a widely used server-side scripting language that has become increasingly fast and powerful through the years. 
    PHP one of the most preferred languages for creating interactive websites and web applications. PHP scripts can be easily embedded into HTML. 
    These features make learning PHP a great option for any web developer. In this skill path, you’ll work through PHP fundamental programming concepts and gain the skills necessary to develop programs in PHP.`,
    price: 6.89,
    rating: 4.4,
    slug: 'learn-php',
    images: [
      {
        id: 'php-image',
        file: {
          url: '/images/products/php.png',
          metadata: 'PHP course cover image'
        }
      }
    ]
  },
  {
    id: 'introduction-to-sql',
    name: 'Introduction to SQL',
    description: `Learn how to create and query relational databases using SQL.
    SQL is a standard language for storing, manipulating and retrieving data in databases.
    Data is a valuable commodity, and learning SQL gives you a deeper understanding of how data is stored and manipulated. This gives you an edge in your professional career.
    Our SQL course will teach you how to use SQL in: MySQL, SQL Server, MS Access, Oracle, Sybase, Informix, Postgres, and other database systems.`,
    price: 5.90,
    rating: 4.2,
    slug: 'introduction-to-sql',
    images: [
      {
        id: 'sql-image',
        file: {
          url: '/images/products/sql.png',
          metadata: 'SQL course cover image'
        }
      }
    ]
  },
  {
    id: 'python-programming-basics-to-advanced',
    name: 'Python Programming - From Basics to Advanced',
    description: `This course bridges the gap between introductory and advanced courses in Python. 
    While there are many excellent introductory Python courses available, most typically do not go deep enough for you to apply your Python skills to research projects.
    In this course, after first reviewing the basics of Python 3, we learn about tools commonly used in research settings. 
    Using a combination of a guided introduction and more independent in-depth exploration, you will get to practice your new Python skills with various case studies chosen for their scientific breadth and their coverage of different Python features. This run of the course includes revised assessments and a new module on machine learning.`,
    price: 8.99,
    rating: 4.7,
    slug: 'python-programming-basics-to-advanced',
    images: [
      {
        id: 'python-image',
        file: {
          url: '/images/products/python.png',
          metadata: 'Python course cover image'
        }
      }
    ]
  },
  {
    id: 'c-programming-for-beginners',
    name: 'C Programming For Beginners - Master the C Language',
    description: `This course provides an overview of the C programming language, including its basics, how to program on a Mac or Windows, and advanced topics such as memory allocation, the stack and heap, and binary file IO. 
    It begins with a gentle introduction to the C language and progresses to a more complex understanding of the "architecture" of a computer. 
    Those who are new to programming will find the course helpful in understanding the basics of the C language. There are C compilers for all major operating systems, and those who need to program C++ or Objective-C.`,
    price: 9.90,
    rating: 4.8,
    slug: 'c-programming-for-beginners',
    images: [
      {
        id: 'c-image',
        file: {
          url: '/images/products/c.png',
          metadata: 'C course cover image'
        }
      }
    ]
  },
  {
    id: 'beginning-cpp-programming',
    name: 'Beginning C++ Programming - From Beginner to Beyond',
    description: `Learn C++ — a versatile programming language that’s important for developing software, games, databases, and more.
    C++ is a leading programming language used in game development, virtual reality, real-time simulation and high-frequency trading, where efficiency and speed matter.
    One reason why C++ is so effective is its ability to work very closely with hardware. Additionally, as an object-oriented programming language, it offers flexibility in development. 
    This makes it the go-to language when speed and performance are non-negotiable.`,
    price: 8.49,
    rating: 4.7,
    slug: 'beginning-cpp-programming',
    images: [
      {
        id: 'cpp-image',
        file: {
          url: '/images/products/c++.png',
          metadata: 'C++ course cover image'
        }
      }
    ]
  },
  {
    id: 'ultimate-csharp-masterclass',
    name: 'Ultimate C# Masterclass for 2024',
    description: `In-depth .NET programming course from basics to advanced. Focus on clean code, performance and practice.
    Learn Microsoft’s popular C# programming language, used to make websites, mobile apps, video games, VR, and more.
    The C# programming language offers flexible and comprehensive libraries that make it easy to work across operating systems. 
    That’s why it’s widely used by companies like Microsoft and Stack Overflow. Whether you want to develop websites, apps, video games, or virtual reality, building your foundation is key. In this course, you’ll learn C# basics so you can become a more versatile programmer.`,
    price: 7.89,
    rating: 4.9,
    slug: 'ultimate-csharp-masterclass',
    images: [
      {
        id: 'csharp-image',
        file: {
          url: '/images/products/csharp.png',
          metadata: 'C# course cover image'
        }
      }
    ]
  }
];


interface ProductType {
  id: string;
  name: string;
  price: number;
  rating: number;
  slug: string;
  description: string;
  images: {
    id: string;
    file: {
      url: string;
      metadata: string;
    };
  }[];
}

interface ProductsProps {
  products: ProductType[];
}

const Products: React.FC<ProductsProps> = ({ products }) => {
  return (
    <div className='py-24'>
      <div className='container'>
        <h1 className='text-2xl font-semibold'>Courses</h1>

        <div className='mt-20 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
          {products.map(product => (
            <Link
              key={product.id}
              href={`/products/${product.slug}`}
              className='group'
            >
              <div className='aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-stone-200 xl:aspect-w-7 xl:aspect-h-8'>
                <Image
                  src={product.images[0].file.url}
                  alt={product.description}
                  fill
                  className='h-full w-full object-cover object-center transition-opacity group-hover:opacity-75'
                />
              </div>
              <h3 className='mt-4 text-sm text-stone-700'>{product.name}</h3>
              <p className='mt-1 text-lg font-medium text-stone-900'>
                {formatCurrency({ amount: product.price })}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;*/



const Products: React.FC<ProductsProps> = ({ products = defaultProducts }) => {
  return (
    <div className='py-24'>
      <div className='container'>
        <h1 className='text-2xl font-semibold'>Courses</h1>
        <div className="mt-20 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
      {products.map((product) => (
        <Link
          key={product.id}
          href={`/products/${product.slug}`}
          className="group"
        >
          <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-stone-200">
            <Image
              src={product.images[0].file.url}
              alt={product.description}
              fill
              className="object-cover object-center transition-opacity group-hover:opacity-75"
            />
          </div>
          <h3 className="mt-4 text-sm text-stone-700">{product.name}</h3>
          <p className="mt-1 text-lg font-medium text-stone-900">
            {formatCurrency({ amount: product.price })}
          </p>
        </Link>
      ))}
    </div>
      </div>
    </div>
  );
}
export default Products;



/*
return (
  <div className='py-24'>
    <div className='container'>
      <h1 className='text-2xl font-semibold'>Courses</h1>
      <div className='mt-20 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
        {products.map((product) => (
         <Link
            key={product.id}
            href={`/products/${product.slug}`}
            className='group'
          >
            <div className='aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-stone-200 xl:aspect-w-7 xl:aspect-h-8'>
              <Image
                src={product.images[0].file.url}
                alt={product.description}
                width={50}
                height={50}
               // fill
                className='h-full w-full object-cover object-center transition-opacity group-hover:opacity-75'
              />
            </div>
            <h3 className='mt-4 text-sm text-stone-700'>{product.name}</h3>
            <p className='mt-1 text-lg font-medium text-stone-900'>
              {formatCurrency({ amount: product.price })}
            </p>
          </Link>
        ))}
      </div>
    </div>
  </div>
);
}
export default Products;
*/
