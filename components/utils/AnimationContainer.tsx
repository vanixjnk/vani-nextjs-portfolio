'use client';

import { motion } from 'framer-motion';
import { AnimationContainerProps } from '@/types';
import { useEffect, useState } from 'react';

const AnimationContainer = ({ children, customClassName, customDelay = 0.3 }: AnimationContainerProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div className={customClassName}>{children}</div>;
  }

  return (
    <motion.div
      className={customClassName}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: customDelay }}
    >
      {children}
    </motion.div>
  );
};

export default AnimationContainer;
