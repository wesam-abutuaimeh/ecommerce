import React from 'react'
import Link from 'next/link';
const CustomLink = ({ href, id, children }) => <Link href={href} id={id} style={{ textDecoration: "none" }}>{children}</Link>
export default CustomLink
