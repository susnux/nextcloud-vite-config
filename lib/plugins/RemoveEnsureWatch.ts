/**
 * SPDX-FileCopyrightText: 2023 Ferdinand Thiessen <opensource@fthiessen.de>
 *
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

/**
 * The `vite:ensure-watch` plugin should ensure `foo.svg?raw` is watched,
 * but when building in watch mode it does not work well with the commonjs plugin and will break the build.
 *
 * ref: https://github.com/vitejs/vite/issues/13342
 */
export const RemoveEnsureWatchPlugin = {
	name: 'remove-ensure-watch-plugin',
	enforce: 'post',
	configResolved: (config) => {
		config.plugins = config.plugins.filter(p => p?.name !== 'vite:ensure-watch')
	},
}
