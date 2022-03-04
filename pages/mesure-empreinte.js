import Head from 'next/head'
// Components
import Header from '../src/components/header'
import Footer from '../src/components/footer'
// Modules
import React from 'react';
import fs from 'fs'
import unified from 'unified'
import remarkParse from 'remark-parse'
import remarkGfm from 'remark-gfm'
import html from 'remark-html'


export async function getStaticProps() {
  const mdFile = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(html)
    .process(fs.readFileSync('./public/md-files/mesure-empreinte.md'));
  const data = {
      content: String(mdFile).replace(/href/g,'target="_blank" href')}
  return {
    props: {data}
  }
}

export default function Home({data}) {
  return (
    <div className="container">
      <Header/>
      
      <main className="main">
        <div className="content-md" dangerouslySetInnerHTML={{__html: data.content}}/>
        <div className="strip">
          <p id="lien-github"><a href={"https://github.com/SylvainH-LSN/LaSocieteNouvelle-Website/blob/main/public/md-files/mesure-empreinte.md"} target="_blanck">Proposer une amélioration de la page</a></p>
        </div>
      </main>

      <Footer/>
    
    </div>
  )
}
