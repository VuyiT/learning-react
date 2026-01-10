import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Greeting from './Greeting.jsx'
import RenderListElements, { PackingList, Poem, RecipeList, RenderComponentList, RenderScientists } from './Rendering.jsx'
import { Gallery } from './Data.jsx'
import { Person, Scientists, FeedbackForm, MovingDot, Menu, Accordion } from './State.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Accordion />
  </StrictMode>,
)
