import React from 'react'
import PropTypes from 'prop-types'
import { ArticleTemplate } from '../../templates/article'

const ArticlePagePreview = ({ entry, widgetFor }) => {
  const tags = entry.getIn(['data', 'tags'])
  return (
    <ArticleTemplate
      content={widgetFor('body')}
      description={entry.getIn(['data', 'description'])}
      tags={tags && tags.toJS()}
      title={entry.getIn(['data', 'title'])}
    />
  )
}

ArticlePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default ArticlePagePreview
