import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis
          voluptas nisi officiis nesciunt ratione recusandae dolor pariatur eos
          nulla? Voluptatibus ullam voluptatum, unde necessitatibus aliquid est
          fuga. Asperiores, aliquid fuga.Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Perspiciatis voluptas nisi officiis nesciunt ratione
          recusandae dolor pariatur eos nulla? Voluptatibus ullam voluptatum,
          unde necessitatibus aliquid est fuga. Asperiores, aliquid fuga.
        </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Incidunt voluptas quas assumenda error quibusdam consequuntur,
            sed doloribus natus, autem quia accusamus enim veniam possimus!
            Aliquid officiis omnis aliquam odio doloremque!
        </p>
      </div>
    </div>
  )
}

export default DescriptionBox