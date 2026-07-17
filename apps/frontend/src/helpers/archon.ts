export const STAGING_ARCHON_BASE_URL = 'https://staging-archon.cosmods.miki85.cz/'

export function withStagingArchonBaseUrl(
	baseUrl: string,
	useStaging = useFeatureFlags().value.archonApiStaging,
) {
	if (!useStaging) {
		return baseUrl
	}

	return STAGING_ARCHON_BASE_URL
}
