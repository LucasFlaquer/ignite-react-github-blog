import { FaArrowUpRightFromSquare, FaGithub } from 'react-icons/fa6'

export function Profile() {
  return (
    <div>
      <img src="https://github.com/lucasflaquer.png" alt="" />
      <div>
        <div>
          <h2>Lucas Flaquer</h2>
          <a href="https://github.com/lucasflaquer">
            github <FaArrowUpRightFromSquare size={12} />
          </a>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit sit
          quos nostrum.
          Iusto, quia. Doloribus, ipsa et qui dignissimos quo quas nobis quis
          nemo
          aut numquam, obcaecati magni. Harum nisi, qui quae enim omnis
          temporibus
          cum quia modi laudantium repellendus id neque sunt iure nihil porro
          distinctio a ratione laboriosam?
        </p>
        <div>
          <div>
            <FaGithub size={18} />
            lucasflaquer
          </div>
          <div>
            <FaGithub size={18} />
            lucasflaquer
          </div>
          <div>
            <FaGithub size={18} />
            lucasflaquer
          </div>
        </div>

      </div>
    </div>
  )
}
