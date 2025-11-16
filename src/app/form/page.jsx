"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import "./form.css";

export default function FormPage() {
  const [isRegister, setIsRegister] = useState(false);
  const [userType, setUserType] = useState(null);
  const [exitAnimation, setExitAnimation] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const birthDateRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const pRef = useRef(null);

  const router = useRouter();

  const toggleForm = () => {
    setIsRegister(!isRegister);
    setPassword("");
    setConfirmPassword("");
    setPasswordMatch(true);
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    if (confirmPassword) {
      setPasswordMatch(value === confirmPassword);
    }
  };

  const handleConfirmChange = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);
    setPasswordMatch(value === password);
  };

  const validateBirthDate = (dateStr) => {
    const birth = new Date(dateStr);
    const today = new Date();
    return birth > today;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value.trim().toLowerCase();
    const isMedical = email.includes("med") || email.includes("hospital");

    router.push(isMedical ? "/dashboard-medical" : "/dashboard-donors");
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (!passwordMatch) {
      confirmPasswordRef.current?.focus();
      return;
    }

    const birthDate = e.target.birth_date.value;

    if (validateBirthDate(birthDate)) {
      birthDateRef.current?.focus();
      pRef.current.textContent = "Ingresa una fecha válida.";
      return;
    } else {
      pRef.current.textContent = "";
    }

    setShowSuccessModal(true);

    setTimeout(() => {
      setShowSuccessModal(false);
      toggleForm();
    }, 2000);
  };

  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <div className="form-container">
      <AnimatePresence>
        {showSuccessModal && (
          <motion.div
            className="success-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="success-modal"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <div className="success-icon">✔</div>
              <p className="success-text">Cuenta registrada correctamente</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {!userType && !exitAnimation && (
          <motion.div
            key="select-card"
            className="form-card select-card"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={true}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <h1 className="form-title">Elige tu tipo de acceso</h1>
            <p className="form-subtitle">
              Selecciona cómo deseas ingresar a BloodFlow.
            </p>

            <button
              className="select-button donor"
              onClick={() => setUserType("donor")}
              aria-label="Ingresar como donante"
            >
              Donante
            </button>

            <button
              className="select-button staff"
              onClick={() => setUserType("staff")}
              aria-label="Ingresar como personal médico"
            >
              Personal Médico
            </button>

            <Link href="/" className="back-home" aria-label="Volver al inicio">
              Volver al inicio
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {userType && !exitAnimation && (
          <motion.div
            key="form-card"
            className={`form-card ${
              userType === "staff" ? "staff-mode" : "donor-mode"
            }`}
            role="form"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.35 }}
          >
            <h1 className="form-title">
              {isRegister ? "Crear cuenta" : "Iniciar sesión"}
            </h1>

            <AnimatePresence mode="wait">
              {!isRegister ? (
                <motion.form
                  key="login-form"
                  className="login-form"
                  onSubmit={handleLogin}
                  aria-label="Formulario de inicio de sesión"
                  variants={formVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <div className="input-group">
                    <label htmlFor="email">Correo electrónico</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      aria-required="true"
                      autoComplete="email"
                      aria-label="Correo electrónico"
                      placeholder="ejemplo@correo.com"
                    />
                  </div>

                  <div className="input-group">
                    <label htmlFor="password">Contraseña</label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      required
                      aria-required="true"
                      aria-label="Contraseña"
                      placeholder="••••••••"
                    />
                  </div>

                  <button
                    type="submit"
                    className={
                      userType === "donor"
                        ? "form-button"
                        : "form-button-medical"
                    }
                    aria-label="Ingresar"
                  >
                    Ingresar
                  </button>

                  {userType === "staff" ? null : (
                    <p className="form-footer">
                      ¿No tienes una cuenta?{" "}
                      <span
                        className="register-link"
                        onClick={toggleForm}
                        aria-label="Registrarse"
                      >
                        Regístrate
                      </span>
                    </p>
                  )}
                </motion.form>
              ) : (
                <motion.form
                  key="register-form"
                  className="register-form"
                  onSubmit={handleRegister}
                  aria-label="Formulario de registro"
                  variants={formVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ duration: 0.4 }}
                >
                  <div className="input-group">
                    <label htmlFor="full_name">Nombre completo</label>
                    <input
                      type="text"
                      id="full_name"
                      required
                      autoComplete="name"
                      aria-required="true"
                      placeholder="Juan Pérez"
                    />
                  </div>

                  <div className="input-group">
                    <label htmlFor="email">Correo electrónico</label>
                    <input
                      type="email"
                      id="email"
                      required
                      autoComplete="email"
                      aria-required="true"
                      placeholder="juan@gmail.com"
                    />
                  </div>

                  <div className="input-group">
                    <label htmlFor="password">Contraseña</label>
                    <input
                      type="password"
                      id="password"
                      value={password}
                      onChange={handlePasswordChange}
                      required
                      aria-required="true"
                      aria-invalid={!passwordMatch}
                      placeholder="P@ssw0rd123"
                    />
                  </div>

                  <div className="input-group">
                    <label htmlFor="confirm_password">
                      Confirmar contraseña
                    </label>
                    <input
                      className={!passwordMatch ? "error" : ""}
                      type="password"
                      id="confirm_password"
                      value={confirmPassword}
                      ref={confirmPasswordRef}
                      onChange={handleConfirmChange}
                      required
                      aria-required="true"
                      aria-invalid={!passwordMatch}
                      placeholder="Repite tu contraseña"
                    />
                    {!passwordMatch && (
                      <p className="error-text">
                        Las contraseñas no coinciden.
                      </p>
                    )}
                  </div>

                  <div className="input-group">
                    <label htmlFor="document_type">Tipo de documento</label>
                    <select id="document_type" required aria-required="true">
                      <option value="">Seleccione</option>
                      <option value="CC">Cédula de ciudadanía</option>
                      <option value="TI">Tarjeta de identidad</option>
                      <option value="CE">Cédula de extranjería</option>
                    </select>
                  </div>

                  <div className="input-group">
                    <label htmlFor="document_number">Número de documento</label>
                    <input
                      type="text"
                      id="document_number"
                      required
                      aria-required="true"
                      placeholder="1029384756"
                    />
                  </div>

                  <div className="input-group">
                    <label htmlFor="birth_date">Fecha de nacimiento</label>
                    <input
                      type="date"
                      id="birth_date"
                      required
                      aria-required="true"
                      ref={birthDateRef}
                    />

                    <p ref={pRef} className="error-text"></p>
                  </div>

                  <div className="input-group">
                    <label htmlFor="phone">Teléfono</label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      autoComplete="phone"
                      aria-required="true"
                      placeholder="3001234567"
                    />
                  </div>

                  <div className="input-group">
                    <label htmlFor="blood_type">Tipo de sangre</label>
                    <select id="blood_type" required aria-required="true">
                      <option value="">Seleccione</option>
                      <option value="O+">O+</option>
                      <option value="O-">O-</option>
                      <option value="A+">A+</option>
                      <option value="A-">A-</option>
                      <option value="B+">B+</option>
                      <option value="B-">B-</option>
                      <option value="AB+">AB+</option>
                      <option value="AB-">AB-</option>
                    </select>
                  </div>

                  <button type="submit" className="form-button">
                    Registrarme
                  </button>

                  <p className="form-footer">
                    ¿Ya tienes una cuenta?{" "}
                    <span
                      className="register-link"
                      onClick={toggleForm}
                      aria-label="Iniciar sesión"
                    >
                      Inicia sesión
                    </span>
                  </p>
                </motion.form>
              )}
            </AnimatePresence>

            <button
              className={
                userType === "donor"
                  ? "back-role-select"
                  : "back-role-select-medical"
              }
              onClick={() => {
                setExitAnimation(true);
                setTimeout(() => {
                  setUserType(null);
                  setIsRegister(false);
                  setExitAnimation(false);
                }, 350);
              }}
              aria-label="Volver a seleccionar el rol"
            >
              <span className="arrow-icon" aria-hidden="true">
                ←
              </span>{" "}
              Escoger nuevamente el rol
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
