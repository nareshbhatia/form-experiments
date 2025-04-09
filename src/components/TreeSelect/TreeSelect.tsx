import { Icons } from '@/components/Icons';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';
import type { TreeNode } from '@/types';

export interface TreeSelectProps {
  value?: string;
  onChange: (value: string) => void;
  tree: TreeNode;
  treeNodeMap: Map<string, TreeNode>;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
}

export function TreeSelect({
  value,
  onChange,
  tree,
  treeNodeMap,
  placeholder = 'Select an item',
  className,
  disabled,
}: TreeSelectProps) {
  // Helper function to get display text for a node
  const getNodeDisplayText = (nodeId: string | undefined) => {
    if (nodeId === undefined) return undefined;
    const node = treeNodeMap.get(nodeId);
    return node ? node.name : undefined;
  };

  // Recursive function to render nested menu items
  const renderTreeNodes = (nodes: TreeNode[] | undefined) => {
    if (!nodes || nodes.length === 0) return undefined;

    return nodes.map((node) => {
      // If the node has children, it's not a leaf node
      const hasChildren = node.children && node.children.length > 0;

      if (hasChildren === true) {
        // Render a submenu for nodes with children
        return (
          <DropdownMenuSub key={node.id}>
            <DropdownMenuSubTrigger>
              <span>{node.name}</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              {renderTreeNodes(node.children)}
            </DropdownMenuSubContent>
          </DropdownMenuSub>
        );
      }
      // Render selectable items for leaf nodes
      return (
        <DropdownMenuCheckboxItem
          checked={node.id === value}
          key={node.id}
          onClick={() => {
            onChange(node.id);
          }}
        >
          {node.name}
        </DropdownMenuCheckboxItem>
      );
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild disabled={disabled}>
        <Button
          className={cn('inline-flex w-fit', className)}
          variant="outline"
        >
          {getNodeDisplayText(value) ?? (
            <span className="text-muted-foreground">{placeholder}</span>
          )}
          <Icons.chevronDown className="text-muted-foreground" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        {renderTreeNodes(tree.children)}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
