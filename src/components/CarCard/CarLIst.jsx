import React, { useEffect, useMemo, useState } from 'react'
import CarCArd from './CarCArd'
import './CarsList.scss'
import carImg from "../../assets/car.png"

const API_URL = "https://67cdad5c125cd5af75787a3f.mockapi.io/cars"

const CarLIst = () => {
  const [cars, setCars] = useState([])
  const [activeCategory, setActiveCategory] = useState('Hamısı')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  // Səndəki kategoriyalar (istəsən API-dən dinamik də çıxarmaq olar)
  const categories = ['Hamısı', 'Ecanom', 'Sedan', 'Suv', 'Bizness', 'Premium']

  // ✅ API-dən maşınları çək
  const fetchCars = async () => {
    try {
      setError("")
      const res = await fetch(API_URL, { headers: { "Accept": "application/json" } })

      if (!res.ok) {
        throw new Error(`API error: ${res.status}`)
      }

      const data = await res.json()

      // image boşdursa, default şəkil verək
      const normalized = (Array.isArray(data) ? data : []).map((c) => ({
        ...c,
        image: c.image || carImg,
        // category varsa trim edək (məs: "Sedan " kimi boşluqları düzəldir)
        category: typeof c.category === "string" ? c.category.trim() : c.category
      }))

      setCars(normalized)
      setLoading(false)
    } catch (e) {
      setLoading(false)
      setError(e?.message || "Unknown error")
    }
  }

  // ✅ POLLING: hər 2 saniyədən bir refresh
  useEffect(() => {
    fetchCars()
    const interval = setInterval(fetchCars, 2000)
    return () => clearInterval(interval)
  }, [])

  // ✅ Filter
  const filtredCars = useMemo(() => {
    if (activeCategory === 'Hamısı') return cars
    return cars.filter((car) => (car.category || "").trim() === activeCategory)
  }, [cars, activeCategory])

  return (
    <div className="car-page">

      {/* Status bar (QA uşaqları üçün yaxşıdır: görür ki, data API-dən gəlir) */}
      <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 12 }}>
        <div style={{ fontSize: 12, opacity: 0.8 }}>
          API: <span style={{ opacity: 1 }}>{API_URL}</span>
        </div>
        {/* <div style={{ fontSize: 12, opacity: 0.8 }}>
          Count: <b>{cars.length}</b>
        </div> */}
        {loading && <div style={{ fontSize: 12 }}>Loading...</div>}
        {error && <div style={{ fontSize: 12, color: "red" }}>Error: {error}</div>}
      </div>

      {/* Tabs */}
      <div className="tabs">
        {categories.map((cat) => (
          <button
            key={cat}
            className={activeCategory === cat ? 'active' : ''}
            onClick={() => setActiveCategory(cat)}
          >
            {cat === 'Bizness'
              ? 'Bizness Class'
              : cat === 'Premium'
              ? 'Premium Class'
              : cat === 'Suv'
              ? 'Suv Model'
              : cat === 'Sedan'
              ? 'Sedan'
              : cat === 'Ecanom'
              ? 'Ecanom Class'
              : 'Hamısı'
            }
          </button>
        ))}
      </div>

      {/* Cars list */}
      <div className='car-list'>
        {filtredCars.map((car) => (
          <CarCArd key={car.id || `${car.name}-${Math.random()}`} car={car} />
        ))}
      </div>

      <div className="row">
        <div className="col-lg-3 col-md-4 col-sm-12"></div>
      </div>
    </div>
  )
}

export default CarLIst
