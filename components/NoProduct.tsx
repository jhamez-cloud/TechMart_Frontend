import React from 'react'
import {
  Empty,
  EmptyHeader,
  EmptyTitle,
  EmptyMedia,
  EmptyDescription,
  EmptyContent
} from './ui/empty'
import { Button } from './ui/button';
import { Spinner } from './ui/spinner';

export default function NoProduct() {
  return (
    <Empty className="w-full">
        <EmptyHeader>
            <EmptyMedia variant="icon">
                <Spinner />
            </EmptyMedia>

            <EmptyTitle>Fetching Items From Your Cart</EmptyTitle>

            <EmptyDescription>
            Please wait while we get your cart items. Do not refresh the page.
            </EmptyDescription>
        </EmptyHeader>

        <EmptyContent>
            <Button variant="outline" size="sm">Cancel</Button>
        </EmptyContent>
    </Empty>
  )
}
