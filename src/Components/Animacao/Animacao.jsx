import { motion } from "framer-motion";

const Animacao = (props) => {
    const { children } = props
    return (
        <motion.div
      initial={{ opacity: 0, y: 30 }}  // começa invisível e mais abaixo
      animate={{ opacity: 1, y: 0 }}   // anima para visível e na posição original
      transition={{ duration: 0.6 }}   // duração da animação
    >{children}</motion.div>
    )
}

export { Animacao };