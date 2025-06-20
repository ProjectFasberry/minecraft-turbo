"use client"

import * as DialogPrimitive from "@radix-ui/react-dialog"
import { cn } from "@repo/lib/cn"
import { ComponentPropsWithoutRef, ElementRef, forwardRef, HTMLAttributes } from 'react';

const Dialog = DialogPrimitive.Root
const DialogTrigger = DialogPrimitive.Trigger
const DialogPortal = DialogPrimitive.Portal
const DialogClose = DialogPrimitive.Close

const DialogOverlay = forwardRef<
  ElementRef<typeof DialogPrimitive.Overlay>, ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-black/50 backdrop-blur-sm " +
      "data-[state=open]:animate-in data-[state=closed]:animate-out " +
      "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 dark:bg-neutral-950/80",
      className
    )}
    {...props}
  />
))
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName

const DialogContent = forwardRef<
  ElementRef<typeof DialogPrimitive.Content>, ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      onOpenAutoFocus={(e) => e.preventDefault()}
      className={cn(
        "fixed left-[50%] top-[50%] max-w-[calc(100%-16px)] sm:max-w-[calc(100%-32px)] lg:max-w-6xl z-50 grid rounded-[8px] w-[90%] mx-auto" +
        " translate-x-[-50%] translate-y-[-50%] gap-4 bg-neutral-300" +
        " dark:bg-background-dark p-6 shadow-lg duration-200" +
        " data-[state=open]:animate-in data-[state=closed]:animate-out" +
        " data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" +
        " data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95" +
        " data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%]" +
        " data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] md:w-full",
        className
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close
        className="absolute text-xl z-[10] text-white right-4 top-4 ring-offset-background transition-opacity
        hover:opacity-100 disabled:pointer-events-none data-[state=open]:text-muted-foreground"
      >
        &times;
        <span className="sr-only">&times;</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal >
))
DialogContent.displayName = DialogPrimitive.Content.displayName

const DialogHeader = ({
  className, ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className
    )}
    {...props}
  />
)
DialogHeader.displayName = "DialogHeader"

const DialogFooter = ({
  className, ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
)
DialogFooter.displayName = "DialogFooter"

const DialogTitle = forwardRef<
  ElementRef<typeof DialogPrimitive.Title>, ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
DialogTitle.displayName = DialogPrimitive.Title.displayName

const DialogDescription = forwardRef<
  ElementRef<typeof DialogPrimitive.Description>, ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-neutral-500 dark:text-neutral-400", className)}
    {...props}
  />
))
DialogDescription.displayName = DialogPrimitive.Description.displayName

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
}