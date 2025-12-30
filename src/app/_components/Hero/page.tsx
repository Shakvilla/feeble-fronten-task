
// Core React and NextJs Imports
import  {FC} from 'react';

// Third-Party Packages imports
import { motion } from 'framer-motion';


// Component & Local imports
import { AppConfig } from '@/utils/constants';
import { Badge, Button, Heading, Text } from '../ui';
import AppleIcon from '@/app/_components/SVGComponents/AppleIcon';


/**
 * Hero Section - Main landing area
 * Now using design system components
 */
const Hero: FC = () => {
  // Version tag for badge
  const VersionTag = () => (
    <div className="flex items-center justify-center px-2 py-0.5 bg-brand-blue/10 rounded-md">
      <span className="text-brand-blue font-semibold text-[11px] tracking-wide">
        {AppConfig.version}
      </span>
    </div>
  );

  return (
    <section className="relative z-10 flex flex-col items-center pt-32 lg:pt-40 pb-20 px-4 text-center max-w-4xl mx-auto">
      {/* Tag with Version - Using Badge Component */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <Badge 
          variant="default" 
          animated 
          leftElement={<VersionTag />}
          aria-label={`Version ${AppConfig.version} - ${AppConfig.badgeText}`}
        >
          {AppConfig.badgeText}
        </Badge>
      </motion.div>

      {/* Heading - Using Heading Component */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mb-8 "
      >
        <Heading as="h1" size="hero" highlight="iMessage">
          iMessage Automation for Teams and AI Workflows.
        </Heading>
      </motion.div>

      {/* Subheading - Using Text Component */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-2xl mb-12"
      >
        <Text size="lg">
          Coup lets you, your team, or AI workflows send iMessages directly from
          your phone number, running securely on your Mac or Mac Mini.
        </Text>
      </motion.div>

      {/* Buttons - Using Button Component */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto px-4 sm:px-0"
      >
        <Button variant="primary" size="md">
          {AppConfig.ctaButtons.primary}
        </Button>
        
        <Button 
          variant="secondary" 
          size="md"
          leftIcon={<AppleIcon className="w-5 h-5" />}
          showDivider
        >
          {AppConfig.ctaButtons.secondary}
        </Button>
      </motion.div>
    </section>
  );
};

export default Hero;