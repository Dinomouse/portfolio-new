import {
  Button,
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerHeader,
} from "@chakra-ui/react";
import { useState } from "react";
import { useDisclosure } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";

import styles from "../styles/Navbar.module.css";

export default function NavMenu() {
  const [size, setSize] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClick = (newSize) => {
    setSize(newSize);
    onOpen();
  };

  const sizes = ["xs"];

  return (
    <>
      {sizes.map((size) => (
        <>
          <div
            className={styles.menuButton}
            onClick={() => handleClick(size)}
            key={size}
          >
            Menu
          </div>
        </>
      ))}

      <Drawer
        className={styles.drawerContainer}
        onClose={onClose}
        isOpen={isOpen}
        size={size}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <u>{`Menu`}</u>
          </DrawerHeader>
          <DrawerBody>
            <Link href="/">
              <div
                className={`${styles.navButtons} ${styles.about}`}
                onClick={onClose}
              >
                Home
              </div>
            </Link>
            <Link href="/about">
              <div
                className={`${styles.navButtons} ${styles.about}`}
                onClick={onClose}
              >
                About
              </div>
            </Link>
            <Link href="/portfolio">
              <div
                className={`${styles.navButtons} ${styles.about}`}
                onClick={onClose}
              >
                Portfolio
              </div>
            </Link>
            <Link href="/contact">
              <div
                className={`${styles.navButtons} ${styles.about}`}
                onClick={onClose}
              >
                Contact
              </div>
            </Link>
            <div className={styles.arianMenu}>
              <Image src="/Group40.svg" height={250} width={250} alt="arian" />
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
