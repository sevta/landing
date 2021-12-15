/* eslint-disable @next/next/no-img-element */

import Layout from "components/Layout";
import Header from "components/Header";
import Typography from "components/Typography";
import Card from "components/Card";
import Contact from "components/Contact";
import Team from "components/Team";
import Ornament from "components/Ornament";
import { client } from "../lib/graphql";
import { gql } from "graphql-request";
import { useEffect } from "react";

export default function Homepage({ data }) {
  useEffect(() => {
    console.log("data", data);
  }, [data]);

  return (
    <Layout>
      <Header
        title={data.homepages[0].title}
        subtitle={data.homepages[0].subtitle}
      />
      <section className="w-full px-10 pb-12 pt-0 relative">
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-slate-100 to-white/80 dark:from-black dark:to-slate-900/80"></div>

        <div className="max-w-[1280px] mx-auto px-16 py-20">
          <div className="w-3/6">
            <Typography.Overline>why resep</Typography.Overline>
            <Typography.Heading type="h3">
              Creativity is nothing but the way to solve new problems.
            </Typography.Heading>
          </div>
          <div className="space-x-5 flex mt-10">
            {[
              Array(4)
                .fill("")
                .map((_, index) => (
                  <Card type="shadow" key={index}>
                    <div>
                      <img src="/images/featured-ico-1.png" alt="" />
                    </div>
                    <Typography.Heading type="h6" className="mt-5">
                      UI Design
                    </Typography.Heading>
                    <Typography.Body
                      size="sm"
                      className="text-main-grayscale-900/50 mt-2"
                    >
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint. Velit officia consequat.
                    </Typography.Body>
                  </Card>
                )),
            ]}
          </div>
        </div>
      </section>
      <section className="p-10 w-full pt-28 pb-40 relative bg-white/80 dark:bg-slate-900/80">
        <Ornament />
        <Team />
      </section>
      <section className="w-full pb-20 bg-white dark:bg-black">
        <Contact />
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const query = gql`
    {
      homepages {
        title
        subtitle
        createdAt
      }
    }
  `;

  const data = await client.request(query);

  console.log("dats", data);

  return {
    props: {
      data,
    },
  };
}
