import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import { Header } from '../stories/Header'

describe('Header Component', () => {
  test('ログアウト状態で正しくレンダリングされること', () => {
    render(<Header />)
    expect(screen.getByText('Log in')).toBeInTheDocument()
    expect(screen.getByText('Sign up')).toBeInTheDocument()
  })

  test('ログイン状態で正しくレンダリングされること', () => {
    const user = { name: 'テストユーザー' }
    render(<Header user={user} />)

    expect(screen.getByText('テストユーザー')).toBeInTheDocument()
    expect(screen.getByText('Log out')).toBeInTheDocument()
  })

  test('ログインボタンがクリックされること', () => {
    const mockLogin = jest.fn()
    render(<Header onLogin={mockLogin} />)

    fireEvent.click(screen.getByText('Log in'))
    expect(mockLogin).toHaveBeenCalledTimes(1)
  })

  test('ログアウトボタンがクリックされること', () => {
    const mockLogout = jest.fn()
    const user = { name: 'テストユーザー' }
    render(<Header user={user} onLogout={mockLogout} />)

    fireEvent.click(screen.getByText('Log out'))
    expect(mockLogout).toHaveBeenCalledTimes(1)
  })
})
