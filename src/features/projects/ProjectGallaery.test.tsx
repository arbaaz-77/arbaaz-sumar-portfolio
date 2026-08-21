import { fireEvent, render, screen } from '@testing-library/react'
import { ProjectGallery } from './ProjectGallery'

const images = ['image-one.png', 'image-two.png', 'image-three.png']

describe('ProjectGallery', () => {
  it('renders the active project screenshot', () => {
    render(<ProjectGallery title="Figuratively" images={images} />)

    expect(
      screen.getByRole('img', {
        name: 'Figuratively screenshot 1',
      }),
    ).toHaveAttribute('src', 'image-one.png')
  })

  it('changes the active screenshot when a thumbnail is selected', () => {
    render(<ProjectGallery title="Figuratively" images={images} />)

    fireEvent.click(
      screen.getByRole('button', {
        name: 'Show Figuratively screenshot 2',
      }),
    )

    expect(
      screen.getByRole('img', {
        name: 'Figuratively screenshot 2',
      }),
    ).toHaveAttribute('src', 'image-two.png')
  })

  it('does not render thumbnails for a single image', () => {
    render(<ProjectGallery title="Portfolio" images={['image-one.png']} />)

    expect(screen.queryByRole('button')).not.toBeInTheDocument()
  })
})
