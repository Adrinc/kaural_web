import { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    telefono: '',
    mensaje: '',
  });

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Filtra caracteres no numéricos solo para el campo de teléfono

    if (name === 'nombre') {
        const alphaValue = value.replace(/[^a-zA-Z\s]+/g, '');
        setFormData({
          ...formData,
          [name]: alphaValue,
        });
      } 
    else if (name === 'telefono') {
      const numericValue = value.replace(/[^0-9]/g, '');
      setFormData({
        ...formData,
        [name]: numericValue,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleValidation = () => {
    const { nombre, correo, telefono } = formData;
    const nombreValid = /^[a-zA-Z\s]+$/.test(nombre); // Solo letras y espacios
    const telefonoValid = /^\d+$/.test(telefono); // Solo números
    const correoValid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(correo); // Formato de correo electrónico válido

    setIsButtonDisabled(!(nombreValid && telefonoValid && correoValid));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar el formulario
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md" style={{ fontFamily: 'Sora' }}>
      <h1 className="text-2xl font-semibold mb-4">Contacto</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="nombre" className="block text-gray-700">Nombre:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            onBlur={handleValidation}
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="correo" className="block text-gray-700">Correo:</label>
          <input
            type="email"
            id="correo"
            name="correo"
            value={formData.correo}
            onChange={handleChange}
            onBlur={handleValidation}
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="telefono" className="block text-gray-700">Teléfono:</label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            onBlur={handleValidation}
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="mensaje" className="block text-gray-700">Mensaje:</label>
          <textarea
            id="mensaje"
            name="mensaje"
            rows="4"
            value={formData.mensaje}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
          ></textarea>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className={`bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600 ${isButtonDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={isButtonDisabled}
          >
            Enviar Correo
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
