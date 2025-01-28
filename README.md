# Next.js 15 App Router API Route 500 Error

This repository demonstrates a bug encountered in Next.js 15's App Router where API routes defined within the `pages/api` directory return a 500 Internal Server Error instead of the intended response.

## Issue Description

When utilizing the App Router in Next.js 15, API routes (located in `pages/api`) unexpectedly return a 500 error.  Standard Page routes in the `app` directory work as expected.  This problem appears to be specific to the interaction between the new routing system and API routes.

## Steps to Reproduce

1. Create a new Next.js 15 App.
2. Create an API route (e.g., `pages/api/hello.js`)
3. Implement a basic API route handler (see `bug.js`)
4. Run the development server.
5. Access the API route; it should return a 500 error.

## Solution

The issue is likely caused by a conflict or unhandled edge case in the App Router's handling of API routes.  A complete solution is still under investigation.  However, a workaround is to migrate the API route outside of the `pages/api` directory.