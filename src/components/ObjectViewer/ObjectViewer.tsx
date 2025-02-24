export interface ObjectViewerProps {
  o?: object;
}

export function ObjectViewer({ o }: ObjectViewerProps) {
  return <pre className="text-sm">{JSON.stringify(o, undefined, 2)}</pre>;
}
