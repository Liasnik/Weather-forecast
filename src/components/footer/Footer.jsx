import s from './footer.module.css'

const Footer = () => {
  return (
    <div className={s.footer}>
      <img className={s.icon} src="icons/02d.png" alt="img" />
      Weather forecast
    </div>
  )
}

export default Footer
