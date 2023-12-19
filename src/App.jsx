import { useState } from 'react'
import './App.css'
import AddItemForm from './createItemForm'
import { Layout } from 'antd'
function App() {

  return (
    <>
    <Layout >

      <Layout.Content>
      <AddItemForm/>
        </Layout.Content>
    </Layout>
     
    </>
  )
}

export default App
