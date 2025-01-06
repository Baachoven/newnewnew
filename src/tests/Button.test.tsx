import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import { Button } from '../stories/Button'

describe('Button Component', () => {
  test('ボタンがレンダリングされること', () => {
    render(<Button label="テストボタン" />)
    expect(screen.getByText('テストボタン')).toBeInTheDocument()
  })

  test('クリックイベントが発火すること', () => {
    const mockClick = jest.fn()
    render(<Button label="クリック" onClick={mockClick} />)

    fireEvent.click(screen.getByText('クリック'))
    expect(mockClick).toHaveBeenCalledTimes(1)
  })

  test('プライマリボタンのスタイルが適用されること', () => {
    render(<Button label="プライマリ" primary />)
    const button = screen.getByText('プライマリ')
    expect(button).toHaveClass('storybook-button--primary')
  })

  test('サイズバリエーションが正しく適用されること', () => {
    render(<Button label="サイズテスト" size="large" />)
    const button = screen.getByText('サイズテスト')
    expect(button).toHaveClass('storybook-button--large')
  })
})
