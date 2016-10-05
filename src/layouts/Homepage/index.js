import React, { PropTypes } from "react"
import enhanceCollection from "phenomic/lib/enhance-collection"

import Page from "../Page"
import PagesList from "../../components/PagesList"
import Content from "../../components/Content"
import Banner from "../../components/Banner"

const numberOfLatestPosts = 6

const Homepage = (props, { collection }) => {
  const latestPosts = enhanceCollection(collection, {
    filter: { layout: "Meetup" },
    sort: "date",
    reverse: true,
  })
  .slice(0, numberOfLatestPosts)

  return (
    <div>
      <Banner
        image={ "/assets//Toulouse_Capitole_Night_Wikimedia_Commons.jpg" }
      >
        { "Toulouse JS" }
        <br />
        { "L'évènement JavaScript du Sud-Ouest" }
      </Banner>
      <Content>
        <Page { ...props }>
          <h2>{ "Les derniers meetups" }</h2>
          <PagesList pages={ latestPosts } />
        </Page>
      </Content>
    </div>
  )
}

Homepage.contextTypes = {
  collection: PropTypes.array.isRequired,
}

export default Homepage