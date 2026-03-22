import React from 'react'
import {
  Empty,
  EmptyHeader,
  EmptyTitle,
  EmptyMedia,
  EmptyDescription,
} from './ui/empty'
import { Button } from './ui/button';
import {FolderLockIcon,ArrowUpRightIcon} from 'lucide-react';

export default function ApiError() {
  return (
    <Empty className="w-full text-lg">

        <EmptyHeader>
            <EmptyMedia variant="icon">
                <FolderLockIcon />
            </EmptyMedia>

            <EmptyTitle>No Products Yet</EmptyTitle>

            <EmptyDescription>
                sorry! No Products Available.
                Check your internet connectivity or try back later.
            </EmptyDescription>
        </EmptyHeader>

        <Button
            variant="link"
            asChild
            className="text-muted-foreground"
            size="sm"
        >
            <a href="#">
            Refresh <ArrowUpRightIcon />
            </a>
        </Button>
    </Empty>
  )
}
