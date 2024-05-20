import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SignIn, SignOut, Characters, Movies, Comics } from '../../pages'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signOut" element={<SignOut />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/comics" element={<Comics />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
