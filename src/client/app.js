import React from 'react'
import { parse, print } from 'graphql'
import GraphiQL from 'graphiql'
import fetch from 'isomorphic-fetch'
import 'graphiql/graphiql.css'
import RiotFist from './img/riot-fist.png'
import './styles/app.css'

export default class CustomGraphiQL extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      apiKey: '',
      query: '',
      variables: '',
      response: '',
      schema: undefined,
      operationName: null,
      storage: null,
      defaultQuery: null,
      onEditQuery: null,
      onEditVariables: null,
      onEditOperationName: null,
      getDefaultFieldNames: null,
    }
  }

  // Example of using the GraphiQL Component API via a toolbar button.
  handleClickPrettifyButton() {
    const editor = this.graphiql.getQueryEditor()
    const currentText = editor.getValue()
    const prettyText = print(parse(currentText))
    editor.setValue(prettyText)
  }

  render() {
    const graphQLFetcher = params => fetch('/graphql', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'X-Riot-Token': this.apiKeyField.value,
      },
      body: JSON.stringify(params),
    }).then(response => response.json())

    return (
      <GraphiQL fetcher={ graphQLFetcher } ref={ (c) => { this.graphiql = c } } { ...this.state }>
        <GraphiQL.Logo>
          <img src={ RiotFist } className="logo" />
          Riot Graph
        </GraphiQL.Logo>
        <GraphiQL.Toolbar className="toolbar">
          <GraphiQL.Button
            onClick={ () => this.handleClickPrettifyButton() }
            label="Prettify"
            title="Prettify Query"
          />
          <GraphiQL.Button
            onClick={ () => this.graphiql.handleToggleHistory() }
            label="History"
            title="Show history"
          />
          <input
            className="apiKeyField"
            ref={ (c) => { this.apiKeyField = c } }
            type="text"
            placeholder="your_api_key"
          />
        </GraphiQL.Toolbar>
      </GraphiQL>
    )
  }
}
