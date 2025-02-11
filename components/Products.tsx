import { formatCurrency } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'


const products = [
  {
    name: 'HTML - Course for Beginners',
    description: `In this guide to HTML for beginners, we’ll learn what HTML is and what it’s used for. 
    Then, we’ll walk through how to write some basic HTML and review some of its most important elements and attributes. 
    We’ll end with a brief look at some resources you can use to continue learning and using HTML. HTML is the foundation of basically every web page. 
    It’s how we tell browsers to structure content into paragraphs, headings, images, links, lists, forms, tables, buttons, and more. If you’re interested in building a website, web development, or just coding in general, learning HTML is a great place to start. 
    Let’s get started!`,
    image: '/images/products/html.png',
    price: '$4.99',
  },
  {
    name: 'Learn CSS: Introduction',
    description: `Ready to start your journey into Cascading Style Sheets (CSS)? 
    Take Learn CSS: Introduction - with CSS, you can add color, background images and change around layouts to make your web pages feel like works of art!
    You'll find learning CSS essential in styling websites. Web developers use it to build on basic HTML and add personality to plain text pages. 
    This course helps you expand your coding foundation and gives you CSS interactive practice to start adding colors and background images or editing layouts so you can create your very own, unique stylized web pages.`,
    image: '/images/products/css.png',
    price: '$5.99',
  },
  {
    name: 'The Complete JavaScript Course',
    description: `Learn how to use JavaScript - a powerful and flexible programming language for adding website interactivity.
    You interact with JavaScript code all the time — you just might not realize it.
    It powers dynamic behavior on websites (like this one) and plays an important role in many fields, like front- and back-end engineering, game and mobile development, virtual reality, and more. In this course, you’ll learn JavaScript fundamentals that will be helpful as you dive deeper into more advanced topics.`,
    image: '/images/products/javascript.png',
    price: '$6.99',
  },
  {
    name: `Typescript: The Complete Developer's Guide`,
    description: `This course is about mastering Typescript, so learning popular design patterns and building complex projects is important. 
    TypeScript is typed JavaScript. TypeScript adds types to JavaScript to help you speed up the development by catching errors before you even run the JavaScript code. Composition vs Inheritance? You'll understand it. You'll build your own web framework? You'll do it. Typescript with React/Redux? It's here!
    The goal of this course is to help you understand why each feature of Typescript exists, and exactly where to use them.`,
    image: '/images/products/typescript.png',
    price: '$5.89',
  },
  {
    name: 'React Course: Learn React JS',
    description: `ReactJS is a widely used popular and powerful JavaScript library for building user interfaces. 
    It is developed and maintained by Facebook.
    React is a framework that employs Webpack to automatically compile React, JSX, and ES6 code while handling CSS file prefixes. 
    React is a JavaScript-based UI development library. Although React is a library rather than a language, it is widely used in web development. 
    The library first appeared in May 2013 and is now one of the most commonly used frontend libraries for web development.
    It's offers various extensions for entire application architectural support, such as Flux and React Native, beyond mere UI.`,
    image: '/images/products/react.png',
    price: '$5.49',
  },
  {
    name: 'Learning Angular',
    description: `As a web developer, you’ll need to learn how to use new frameworks on a regular basis. 
    AngularJS is a full-featured framework that is incredibly popular among developers. 
    For single-page applications, the AngularJS framework creates rich interactive features for a real-time experience. 
    It’s friendly to developers and has a supportive and active community. 
    Products built with AngularJS include YouTube Video Manager, The Weather Channel site, several Google products, and Tinder.`,
    image: '/images/products/angular.png',
    price: '$6.99',
  },
  {
    name: 'Learn PHP',
    description: `Learn the fundamentals of PHP, one of the most popular languages of modern web development.
    PHP is a widely used server-side scripting language that has become increasingly fast and powerful through the years. 
    PHP one of the most preferred languages for creating interactive websites and web applications. PHP scripts can be easily embedded into HTML. 
    These features make learning PHP a great option for any web developer. In this skill path, you’ll work through PHP fundamental programming concepts and gain the skills necessary to develop programs in PHP.`,
    image: '/images/products/php.png',
    price: '$6.89',
  },
  {
    name: 'Introduction to SQL',
    description: `Learn how to create and query relational databases using SQL.
    SQL is a standard language for storing, manipulating and retrieving data in databases.
    Data is a valuable commodity, and learning SQL gives you a deeper understanding of how data is stored and manipulated. This gives you an edge in your professional career.
    Our SQL course will teach you how to use SQL in: MySQL, SQL Server, MS Access, Oracle, Sybase, Informix, Postgres, and other database systems.`,
    image: '/images/products/sql.png',
    price: '$5.90',
  },
  {
    name: 'Python Programming - From Basics to Advanced',
    description: `This course bridges the gap between introductory and advanced courses in Python. 
    While there are many excellent introductory Python courses available, most typically do not go deep enough for you to apply your Python skills to research projects.
    In this course, after first reviewing the basics of Python 3, we learn about tools commonly used in research settings. 
    Using a combination of a guided introduction and more independent in-depth exploration, you will get to practice your new Python skills with various case studies chosen for their scientific breadth and their coverage of different Python features. This run of the course includes revised assessments and a new module on machine learning.`,
    image: '/images/products/python.png',
    price: '$8.99',
  },
  {
    name: 'C Programming For Beginners - Master the C Language',
    description: `This course provides an overview of the C programming language, including its basics, how to program on a Mac or Windows, and advanced topics such as memory allocation, the stack and heap, and binary file IO. 
    It begins with a gentle introduction to the C language and progresses to a more complex understanding of the "architecture" of a computer. 
    Those who are new to programming will find the course helpful in understanding the basics of the C language. There are C compilers for all major operating systems, and those who need to program C++ or Objective-C.`,
    image: '/images/products/c.png',
    price: '$9.90',
  },
  {
    name: 'Beginning C++ Programming - From Beginner to Beyond',
    description: `Learn C++ — a versatile programming language that’s important for developing software, games, databases, and more.
    C++ is a leading programming language used in game development, virtual reality, real-time simulation and high-frequency trading, where efficiency and speed matter.
    One reason why C++ is so effective is its ability to work very closely with hardware. Additionally, as an object-oriented programming language, it offers flexibility in development. 
    This makes it the go-to language when speed and performance are non-negotiable.`,
    image: '/images/products/c++.png',
    price: '$8.49',
  },
  {
    name: 'Ultimate C# Masterclass for 2024',
    description: `In-depth .NET programming course from basics to advanced. Focus on clean code, performance and practice.
    Learn Microsoft’s popular C# programming language, used to make websites, mobile apps, video games, VR, and more.
    The C# programming language offers flexible and comprehensive libraries that make it easy to work across operating systems. 
    That’s why it’s widely used by companies like Microsoft and Stack Overflow. Whether you want to develop websites, apps, video games, or virtual reality, building your foundation is key. In this course, you’ll learn C# basics so you can become a more versatile programmer.`,
    image: '/images/products/csharp.png',
    price: '$7.89',
  },

]
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

const Products: React.FC<ProductsProps> = ({ products  }) => {
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

export default Products;
