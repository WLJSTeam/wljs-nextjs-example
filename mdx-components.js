export function useMDXComponents(components) {
  return {
    h1: (props) => <h1 className="text-2xl font-bold mt-8 mb-4" {...props} />,
    p: (props) => <p className="text-gray-700 leading-relaxed my-4" {...props} />,
    ...components,
  }
}