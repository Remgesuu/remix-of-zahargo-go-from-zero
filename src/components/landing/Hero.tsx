import { motion, useDragControls } from "framer-motion";
import { ArrowRight, Terminal, X, Minus, Plus, Play, GripHorizontal } from "lucide-react";
import { LINKS } from "@/config/links";
import { useState, useRef } from "react";

// Interactive Go code example with draggable terminal and run functionality
const codeLines = [
  { text: 'package main', type: 'keyword' },
  { text: '', type: 'empty' },
  { text: 'import (', type: 'keyword' },
  { text: '    "fmt"', type: 'string' },
  { text: '    "net/http"', type: 'string' },
  { text: '    "encoding/json"', type: 'string' },
  { text: ')', type: 'keyword' },
  { text: '', type: 'empty' },
  { text: 'type Server struct {', type: 'keyword' },
  { text: '    port string', type: 'variable' },
  { text: '}', type: 'keyword' },
  { text: '', type: 'empty' },
  { text: 'func main() {', type: 'keyword' },
  { text: '    srv := &Server{port: ":8080"}', type: 'variable' },
  { text: '    http.HandleFunc("/api", srv.handler)', type: 'function' },
  { text: '    fmt.Println("🚀 Server running...")', type: 'function' },
  { text: '    http.ListenAndServe(srv.port, nil)', type: 'function' },
  { text: '}', type: 'keyword' },
];

// Output lines when "running" the code
const outputLines = [
  '$ go run main.go',
  '🚀 Server running...',
  'Listening on :8080',
];

function CodeTerminal() {
  const [isHeaderHovered, setIsHeaderHovered] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [showOutput, setShowOutput] = useState(false);
  const constraintsRef = useRef(null);
  const dragControls = useDragControls();
  
  const handleRun = () => {
    if (isRunning) return;
    setIsRunning(true);
    setShowOutput(false);
    
    setTimeout(() => {
      setShowOutput(true);
      setTimeout(() => {
        setIsRunning(false);
      }, 2000);
    }, 500);
  };
  
  return (
    <div ref={constraintsRef} className="relative w-full h-full flex items-center justify-center">
      <motion.div
        drag
        dragControls={dragControls}
        dragConstraints={constraintsRef}
        dragElastic={0.1}
        dragMomentum={false}
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative cursor-grab active:cursor-grabbing"
        whileDrag={{ scale: 1.02, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.4)" }}
      >
        {/* Terminal window */}
        <div className="bg-[#1a1a1a] rounded-xl overflow-hidden shadow-2xl border border-white/10 w-[480px] xl:w-[560px]">
          {/* Terminal header */}
          <div 
            className="flex items-center gap-2 px-4 py-3 bg-[#252525] border-b border-white/5 select-none"
            onMouseEnter={() => setIsHeaderHovered(true)}
            onMouseLeave={() => setIsHeaderHovered(false)}
            onPointerDown={(e) => dragControls.start(e)}
          >
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[#ff5f57] flex items-center justify-center cursor-pointer hover:bg-[#ff4136] transition-colors">
                {isHeaderHovered && <X className="w-2 h-2 text-[#4a0002]" strokeWidth={2.5} />}
              </div>
              <div className="w-3 h-3 rounded-full bg-[#febc2e] flex items-center justify-center cursor-pointer hover:bg-[#f5a623] transition-colors">
                {isHeaderHovered && <Minus className="w-2 h-2 text-[#985700]" strokeWidth={2.5} />}
              </div>
              <div className="w-3 h-3 rounded-full bg-[#28c840] flex items-center justify-center cursor-pointer hover:bg-[#1db954] transition-colors">
                {isHeaderHovered && <Plus className="w-2 h-2 text-[#006500]" strokeWidth={2.5} />}
              </div>
            </div>
            
            <div className="flex-1 flex items-center justify-center gap-2 text-xs text-white/40">
              <GripHorizontal className="w-4 h-4 text-white/20" />
              <Terminal className="w-3 h-3" />
              <span>main.go</span>
            </div>
            
            {/* Run button */}
            <button
              onClick={handleRun}
              disabled={isRunning}
              className="flex items-center gap-1.5 px-3 py-1 bg-[#28c840] hover:bg-[#1db954] text-[#006500] text-xs font-medium rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Play className="w-3 h-3" fill="currentColor" />
              {isRunning ? 'Running...' : 'Run'}
            </button>
          </div>
          
          {/* Terminal content */}
          <div className="p-5 font-mono text-sm leading-relaxed max-h-[380px] overflow-y-auto">
            {codeLines.map((line, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 + 0.8 }}
                className="min-h-[1.4em]"
              >
                {line.text && (
                  <span className={
                    line.type === 'keyword' ? 'text-[#c586c0]' :
                    line.type === 'string' ? 'text-[#ce9178]' :
                    line.type === 'function' ? 'text-[#dcdcaa]' :
                    'text-[#9cdcfe]'
                  }>
                    {line.text}
                  </span>
                )}
              </motion.div>
            ))}
            
            {/* Output section */}
            {showOutput && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="mt-4 pt-4 border-t border-white/10"
              >
                {outputLines.map((line, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.3 }}
                    className={`min-h-[1.4em] ${index === 0 ? 'text-white/50' : 'text-[#4ec9b0]'}`}
                  >
                    {line}
                  </motion.div>
                ))}
              </motion.div>
            )}
            
            {/* Cursor */}
            {!showOutput && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1, delay: 1.8, repeat: Infinity }}
                className="inline-block w-2 h-5 bg-primary ml-1 align-middle"
              />
            )}
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -bottom-3 -right-3 w-full h-full bg-primary/10 rounded-xl -z-10" />
      </motion.div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 grain" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/3 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-16 lg:pt-32 lg:pb-24 w-full">
        <div className="grid lg:grid-cols-[1fr,500px] xl:grid-cols-[1fr,580px] gap-12 lg:gap-8 items-center">
          {/* Content */}
          <div className="min-w-0">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="mb-6 lg:mb-8"
            >
              <span className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground tracking-wide uppercase">
                <span className="w-8 h-px bg-primary" />
                Go / Golang / Backend
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif text-display text-foreground mb-6 lg:mb-8 text-balance"
            >
              Golang-разработка.{" "}
              <span className="text-primary">С нуля до продакшена</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-body-lg text-muted-foreground max-w-xl mb-10 lg:mb-12 leading-relaxed"
            >
              Индивидуальное менторство по созданию Golang сервисов. 
              Только практика — 5 реальных проектов в портфолио. 
              Код, который приносит деньги.
            </motion.p>

            {/* CTA Group */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row items-start gap-4"
            >
              <a
                href={LINKS.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 rounded-full font-semibold text-base hover:bg-foreground/90 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                Записаться на менторство
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#program"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#program")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 text-foreground font-medium px-4 py-4 hover:text-primary transition-colors focus-visible:outline-none focus-visible:text-primary focus-visible:underline underline-offset-4"
              >
                Смотреть программу
              </a>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-12 lg:mt-16 flex flex-wrap items-center gap-6 lg:gap-10 text-sm text-muted-foreground"
            >
              <div className="flex items-center gap-3">
                <span className="font-serif text-3xl lg:text-4xl font-bold text-foreground">5</span>
                <span className="max-w-[80px] leading-tight">реальных проектов</span>
              </div>
              <div className="w-px h-8 bg-border hidden sm:block" />
              <div className="flex items-center gap-3">
                <span className="font-serif text-3xl lg:text-4xl font-bold text-foreground">150+</span>
                <span className="max-w-[100px] leading-tight">практических заданий</span>
              </div>
              <div className="w-px h-8 bg-border hidden sm:block" />
              <div className="flex items-center gap-3">
                <span className="font-serif text-3xl lg:text-4xl font-bold text-primary">1:1</span>
                <span className="max-w-[100px] leading-tight">персональный ментор</span>
              </div>
            </motion.div>
          </div>

          {/* Terminal Visual - larger and draggable */}
          <div className="hidden lg:flex items-center justify-end relative h-[500px] overflow-visible">
            <CodeTerminal />
          </div>
        </div>
      </div>

      {/* Scroll indicator - positioned in document flow, not absolute */}
      <div className="flex justify-center pb-8 hidden lg:flex">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 rounded-full border-2 border-border flex items-start justify-center pt-2"
          >
            <div className="w-1 h-2 bg-muted-foreground rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
