import {describe,it,beforeEach, expect} from 'vitest'
import {render,screen,fireEvent, cleanup} from '@testing-library/react'
import {SidebarHeader} from '@/components/SidebarHeader'
import { MemoryRouter } from 'react-router-dom'

describe('Testing SideBar',()=>{
  beforeEach(()=>{
    cleanup()
    render(
    <MemoryRouter>     
      <SidebarHeader/>
    </MemoryRouter>
    )
  })

  function openSidebar(){
    const openButton = screen.getByLabelText(/abrir menu/i)
    fireEvent.click(openButton)
    return openButton
  }
  
  it('Can open',()=>{
    const openButton = openSidebar()
    const isOpen = openButton.getAttribute('aria-expanded')
    expect(isOpen).toBe('true')
  })

  it('Can close',()=>{
    const openButton = openSidebar() 
    const closeButton = screen.getByLabelText(/cerrar menu/i)
    fireEvent.click(closeButton)

    const isOpen = openButton.getAttribute('aria-expanded')
    expect(isOpen).toBe('false')
  })
  it('Submenu is open by default',()=>{
    const isSubmenuOpen = screen.getByLabelText(/toggle submenu/i).getAttribute('aria-expanded')
    expect(isSubmenuOpen).toBe('true')
  })
  it('Can close submenu',()=>{
    const toggleButton = screen.getByLabelText(/toggle submenu/i)
    fireEvent.click(toggleButton)
    const isSubmenuOpen = toggleButton.getAttribute('aria-expanded')
    expect(isSubmenuOpen).toBe('false')
  })
  it('Can open submenu',()=>{
    const toggleButton = screen.getByLabelText(/toggle submenu/i)
    fireEvent.click(toggleButton)
    fireEvent.click(toggleButton)
    const isSubmenuOpen = toggleButton.getAttribute('aria-expanded')
    expect(isSubmenuOpen).toBe('true')
  })
})
