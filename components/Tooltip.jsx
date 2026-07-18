import { motion, useSpring } from "framer-motion";
import { Hand } from "lucide-react";

const Tooltip = ({ hovered, mouseX, mouseY }) => {
  if (!hovered) return null;

  const smoothX = useSpring(mouseX, {
    stiffness: 500,
    damping: 35,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 500,
    damping: 35,
  });

  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.9,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      exit={{
        opacity: 0,
        scale: 0.9,
      }}
      className="
pointer-events-none
fixed
z-50
rounded-2xl
border
border-white/20
bg-white/5
backdrop-blur-2xl
px-3
py-1
text-[11px]
text-white
shadow-[0_10px_40px_rgba(0,0,0,0.35)]
"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        x: smoothX,
        y: smoothY,
        translateX: 20,
        translateY: 20,
        zIndex: 9999,
      }}
    >
      <div className="flex gap-2">
        <Hand className="h-4 w-4" />
        <p>Drag me</p>
      </div>
    </motion.div>
  );
};

export default Tooltip;
