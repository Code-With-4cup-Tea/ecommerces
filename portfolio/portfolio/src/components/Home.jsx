import React from 'react'
import  { useRef } from "react";
import { animate, motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";
import mypic from '../assets/logo.png';

const Home = () => {


    const animations = {
        h1: {
          initial: {
            x: "-100%",
            opacity: 0,
          },
          whileInView: {
            x: 0,
            opacity: 1,
          },
        },
        button: {
          initial: {
            y: "-100%",
            opacity: 0,
          },
          whileInView: {
            y: 0,
            opacity: 1,
          },
        },
      };
  return (
    <div id='home'>
            <section>
                <div>
                <motion.h1 {...animations.h1}>
                 Hi, I Am <br /> Rajesh kumar
                </motion.h1>

                <Typewriter
            options={{
              strings: ["A Developer", "A Creator"],
              autoStart: true,
              loop: true,
              cursor: "",
              wrapperClassName: "typewriterpara",
            }}
          />

          <div>
            <a href="mailto:raj223958@gmail.com">Hire Me</a>
            <a href="#project">
              Projects <BsArrowUpRight />
            </a>
          </div>

          <aside>
            <article>
              <p>
                +
              
                  <span>
                    500
                  </span>
              
              </p>
              <span>Projects Done</span>
            </article>

            <article data-special>
              <p>Contact</p>
              <span>raj223958@gmail.com</span>
            </article>
          </aside>

        </div>

    </section>

     <section>
        <img src={mypic} alt="Rajesh" />
      </section>
      <BsChevronDown />
</div>
  )
}

export default Home