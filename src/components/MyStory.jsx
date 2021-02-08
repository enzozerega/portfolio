import React from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import "../style/MyStory.scss";

const transition = { duration: 0.2, ease: [0.43, 0.13, 0.23, 0.96] };

const MyStory = () => {
  const { scrollYProgress } = useViewportScroll();
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 0]);
  return (
    <div className="my-story-container">
      <p>
        Here I describe some important moments of my past, including how I ended
        up where I am now, and what my hopes and dreams are for the future. This
        is a rather personal section, an attempt to give a glimpse of how I am
        as a person.
      </p>
      <h2>Who I am</h2>
      <p>
        I'm a 32-year-old man originally from Chile who on 2014 moved to Sweden.
        Here I have lived in Malmö and Lund, but now I'm based in Stockholm. It
        has taken me quite some time to figure out what I want to do with my
        life. How can I contribute to the world? –it's a question that is often
        on my mind these days. I'm about to finish my sudies in
        <strong> Web Development</strong>, and I'm looking for a place where I
        can start applying all the things I've learned until now.
      </p>
      <h2>How I got into web developtment</h2>
      <p>
        For a developer, I have an unusual background. When I graduated from
        high school, more than ten years ago in Chile, I decided to study a
        Bachelor's program on Agricultural Sciences. Probably because I grew up
        in the countryside, surrounded by nature and agricultural fields. That's
        home for me. I mean, literally one of my neighbors was a vineyard.
        Learning the sciences behind how we make use of nature to produce our
        food seemed like a reasonable choice at that time. But the more I
        learned how damaging for our planet agriculture had become, the more I
        got interested on the
        <strong> environmental sciences</strong>. This is why, instead of
        focusing my studies on crop production, I focused them on environmental
        management. By doing this, I ended up taking courses on climate change,
        ecology, conservation biology, sustainable development and, my favorite,
        geomatics.
      </p>
      <p>
        Wait, geo... what? I know not many people know what geomatics is, so
        I'll give a short definition here. Geomatics is a scientific discipline
        that studies the gathering, storing, processing, and delivering of
        geographic information. It involves everything that is concerned with
        the digitalization of data of the Earth's surface. When I took that
        course, things changed for me. It was the first time I tried to solve
        complex problems from the "real world" using advanced computer software.
        Not only geomatics seemed to be an incredibly useful discipline, but I
        was good at it. And I needed to know more about it. I wasn't sure if
        pursuing a career on this was going to be a good idea, but as a good
        millennial, I took my chances and I did it. Right after I got my
        Bachelor's degree, I sold everything I had, left my country, and moved
        to Sweden. Not many countries have specialized study programs on
        geomatics, and Sweden is one of them.
      </p>
      <p>
        Starting a new life in Sweden was tough. As many foreigners, I had to
        work hard on whatever I could find, mostly in cleaning and restaurant
        jobs. But if I'm sincere, I can say that the experience of moving out to
        another country and building a life almost from zero, is one of the most
        rewarding experiences I have ever had. I couldn't have learned any of
        the things I have learned at any school or university. The people I met
        and the places I discovered have changed me in a profound way. It feels
        like I'm a different person now, a better one. More authentic. Stronger.
        Wiser.
      </p>
      <p>
        After a couple of years, I started a Master's program in geomatics at
        Lund University, where I had advanced courses in Geographical
        Information Systems (GIS), geographical databases (combining PostgreSQL
        with PostGIS), remote sensing (mainly using satellite imagery),
        statistical analysis, algorithms and programming (MatLab, R and Python).
        During this period, I had another moment of insight. While I was doing a
        course called "Web GIS", I became fascinated by how everything that I
        had studied until that moment could be stored on web servers and
        displayed from anywhere in the world through a web browser. It was the
        first time I saw the internet as the powerful technology that it really
        is. How to contribute to the world, without considering using the
        internet as my ally? Web technologies have become crucial for solving
        many of today's global issues.
      </p>
      <p>
        When I obtained my<strong> MSc in geomatics</strong>, I had much more
        clarity about what really is that I want to do with my life. And here is
        a clue: it involves the World Wide Web and science. It took me some
        months to decide what my next step was going to be, but I ended up
        choosing to start a journey to become a web developer.
        <strong> Full Stack Development</strong> was the program that better
        suited my aspirations. So on 2019, I started a 2-year vocational
        education and training program (VET) on the subject at Chas Academy.
        There I was trained on the use of HTML, CSS, JavaScript (Vanilla,
        Angular and React), WordPress, RESTful APIs, PHP (Laravel), Node.js
        (Express), MySQL, MongoDB, OAuth, WebSockets and AGILE practices, among
        other topics. After finishing my courses, I did 6-months internship at a
        company called Gleechi, located in Stockholm, and specialized in Virtual
        Reality (VR) training development. There I had the opportunity to learn
        how to create serverless web applications using Amazon Web Services
        (AWS) and GraphQL APIs.
      </p>
      <h2>What I want</h2>
      <p>
        I want to become a great developer, someone professional, able to help
        in our planet's problems, who can bring knowledge to people and help
        them through web applications. I would really like to build tools that
        make the use of our time and resources more efficient, decreasing our
        impact on the planet, and help people that might benefit from these
        technologies. I'm not naïve though. I know it takes more than just
        technology to solve the challenges that our societies face today. There
        is also an imperative need for speaking out against injustice,
        discrimination, corruption and inequity. A need for questioning our
        belief systems, for making things different. And that is hard. Seriously
        hard. Making a change involves leaving our comfort zone and standing up
        behind what we believe on. We would have to be brave and expose
        ourselves, which of course is scary, but necessary. And I'm up for the
        challenge.
      </p>
      <p>
        What do you think? Should we grab a cup of coffee some day –or a beer{" "}
        <span role="img" aria-label="Winking face">
          😉
        </span>
        – and talk about how we could save the planet? Don't doubt on reaching
        out to me if you think it can be a good idea.
      </p>
    </div>
  );
};

export default MyStory;
