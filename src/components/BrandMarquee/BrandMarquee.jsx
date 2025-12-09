import "./BrandMarquee.css"

const BrandMarquee = () => {
  const brands = ["* React", "* Python", "* Design", "* World", "* Development"]

  return (
    <div className="brand-marquee">
      <div className="marquee-content">
        <ul>
          {brands.map((brand, index) => (
            <li key={index}>{brand}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default BrandMarquee
