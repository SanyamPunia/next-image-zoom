# react-zoom-smooth

A React component for smooth image zooming with customizable options, compatible with Next.js Image components and standard `<img>` tags.

![react-zoom-smooth-demo](https://github.com/user-attachments/assets/4201a366-26cb-44c8-a40e-f3be842b119b)

## Installation

```bash
npm install react-zoom-smooth
```

## Usage

```jsx
import { ZoomImage } from "react-zoom-smooth";
import Image from "next/image";

export default function YourComponent() {
  return (
    <ZoomImage
      zoomFactor={2}
      duration={0.3}
      backgroundColor="rgba(0, 0, 0, 0.8)"
    >
      <Image src="/image.png" alt="image alt text" width={400} height={300} />
    </ZoomImage>
  );
}
```

## Props

| Prop              | Type           | Default                | Description                                                                                     |
| ----------------- | -------------- | ---------------------- | ----------------------------------------------------------------------------------------------- |
| `children`        | `ReactElement` | **(required)**         | The image component or element to be wrapped with zoom functionality.                           |
| `zoomFactor`      | `number`       | `2`                    | The factor by which the image should zoom in when clicked.                                      |
| `duration`        | `number`       | `0.3`                  | The duration of the zoom animation in seconds.                                                  |
| `backgroundColor` | `string`       | `"rgba(0, 0, 0, 0.8)"` | The background color of the overlay when the image is zoomed in, in any valid CSS color format. |

## Features

- Smooth zoom animations using Framer Motion
- Compatible with Next.js Image components and standard `<img>` tags
- Customizable zoom factor, animation duration, and background color
- Responsive design that works across different screen sizes
- Accessible, with keyboard navigation support

## Browser Support

`react-zoom-smooth` works in all modern browsers that support CSS transforms and transitions.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

## TODOs

- Add more customization options (e.g., zoom origin, custom animations)
- Improve performance for large images
- Add touch gesture support for mobile devices
- Implement lazy loading for better performance
- Create comprehensive documentation and examples
